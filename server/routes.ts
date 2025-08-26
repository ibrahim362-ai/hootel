import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertRoomSchema, insertBookingSchema, insertTaskSchema, insertShiftSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const existingEmail = await storage.getUserByEmail(userData.email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const user = await storage.createUser(userData);
      const { password: _, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      res.status(400).json({ message: "Registration failed" });
    }
  });

  // Room routes
  app.get("/api/rooms", async (req, res) => {
    try {
      const rooms = await storage.getRooms();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch rooms" });
    }
  });

  app.post("/api/rooms", async (req, res) => {
    try {
      const roomData = insertRoomSchema.parse(req.body);
      const room = await storage.createRoom(roomData);
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ message: "Failed to create room" });
    }
  });

  app.put("/api/rooms/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const room = await storage.updateRoom(id, updates);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json(room);
    } catch (error) {
      res.status(400).json({ message: "Failed to update room" });
    }
  });

  // Booking routes
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.status(201).json(booking);
    } catch (error) {
      res.status(400).json({ message: "Failed to create booking" });
    }
  });

  // Staff routes
  app.get("/api/staff", async (req, res) => {
    try {
      const staff = await storage.getStaff();
      res.json(staff);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch staff" });
    }
  });

  // Task routes
  app.get("/api/tasks", async (req, res) => {
    try {
      const tasks = await storage.getTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tasks" });
    }
  });

  app.post("/api/tasks", async (req, res) => {
    try {
      const taskData = insertTaskSchema.parse(req.body);
      const task = await storage.createTask(taskData);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: "Failed to create task" });
    }
  });

  // Shift routes
  app.get("/api/shifts", async (req, res) => {
    try {
      const shifts = await storage.getShifts();
      res.json(shifts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch shifts" });
    }
  });

  app.post("/api/shifts", async (req, res) => {
    try {
      const shiftData = insertShiftSchema.parse(req.body);
      const shift = await storage.createShift(shiftData);
      res.status(201).json(shift);
    } catch (error) {
      res.status(400).json({ message: "Failed to create shift" });
    }
  });

  // Dashboard metrics
  app.get("/api/dashboard/metrics", async (req, res) => {
    try {
      const rooms = await storage.getRooms();
      const bookings = await storage.getBookings();
      
      const totalRooms = rooms.length;
      const occupiedRooms = rooms.filter(r => r.status === 'occupied').length;
      const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;
      
      const todayBookings = bookings.filter(b => {
        const today = new Date();
        const bookingDate = b.createdAt ? new Date(b.createdAt) : null;
        return bookingDate ? bookingDate.toDateString() === today.toDateString() : false;
      });
      
      const todayRevenue = todayBookings.reduce((sum, booking) => {
        return sum + parseFloat(booking.totalAmount);
      }, 0);

      const activeGuests = bookings.filter(b => b.status === 'checked-in').length;

      res.json({
        occupancyRate,
        todayRevenue,
        activeGuests,
        avgRating: 4.8,
        roomStatus: {
          available: rooms.filter(r => r.status === 'available').length,
          occupied: occupiedRooms,
          cleaning: rooms.filter(r => r.status === 'cleaning').length,
          maintenance: rooms.filter(r => r.status === 'maintenance').length,
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch metrics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
