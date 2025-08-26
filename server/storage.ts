import { type User, type InsertUser, type Room, type InsertRoom, type Booking, type InsertBooking, type Staff, type InsertStaff, type Task, type InsertTask, type Shift, type InsertShift } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<InsertUser>): Promise<User | undefined>;
  
  // Room methods
  getRooms(): Promise<Room[]>;
  getRoom(id: string): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;
  updateRoom(id: string, updates: Partial<InsertRoom>): Promise<Room | undefined>;
  
  // Booking methods
  getBookings(): Promise<Booking[]>;
  getBooking(id: string): Promise<Booking | undefined>;
  getBookingsByUserId(userId: string): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBooking(id: string, updates: Partial<InsertBooking>): Promise<Booking | undefined>;
  
  // Staff methods
  getStaff(): Promise<Staff[]>;
  getStaffMember(id: string): Promise<Staff | undefined>;
  getStaffByUserId(userId: string): Promise<Staff | undefined>;
  createStaffMember(staff: InsertStaff): Promise<Staff>;
  updateStaffMember(id: string, updates: Partial<InsertStaff>): Promise<Staff | undefined>;
  
  // Task methods
  getTasks(): Promise<Task[]>;
  getTask(id: string): Promise<Task | undefined>;
  getTasksByStaffId(staffId: string): Promise<Task[]>;
  createTask(task: InsertTask): Promise<Task>;
  updateTask(id: string, updates: Partial<InsertTask>): Promise<Task | undefined>;
  
  // Shift methods
  getShifts(): Promise<Shift[]>;
  getShift(id: string): Promise<Shift | undefined>;
  getShiftsByStaffId(staffId: string): Promise<Shift[]>;
  createShift(shift: InsertShift): Promise<Shift>;
  updateShift(id: string, updates: Partial<InsertShift>): Promise<Shift | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private rooms: Map<string, Room>;
  private bookings: Map<string, Booking>;
  private staff: Map<string, Staff>;
  private tasks: Map<string, Task>;
  private shifts: Map<string, Shift>;

  constructor() {
    this.users = new Map();
    this.rooms = new Map();
    this.bookings = new Map();
    this.staff = new Map();
    this.tasks = new Map();
    this.shifts = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Create admin user
    const adminId = randomUUID();
    this.users.set(adminId, {
      id: adminId,
      username: "admin",
      email: "admin@hotel.com",
      password: "admin123",
      role: "admin",
      name: "John Anderson",
      createdAt: new Date(),
    });

    // Create employer user
    const employerId = randomUUID();
    this.users.set(employerId, {
      id: employerId,
      username: "staff",
      email: "staff@hotel.com",
      password: "staff123",
      role: "employer",
      name: "Maria Rodriguez",
      createdAt: new Date(),
    });

    // Create guest user
    const guestId = randomUUID();
    this.users.set(guestId, {
      id: guestId,
      username: "guest",
      email: "guest@hotel.com",
      password: "guest123",
      role: "user",
      name: "Sarah Johnson",
      createdAt: new Date(),
    });

    // Create sample rooms
    const rooms = [
      { number: "101", type: "standard", status: "available", price: "120.00", amenities: ["WiFi", "TV", "AC"] },
      { number: "201", type: "deluxe", status: "occupied", price: "180.00", amenities: ["WiFi", "TV", "AC", "Mini Bar"] },
      { number: "301", type: "suite", status: "available", price: "350.00", amenities: ["WiFi", "TV", "AC", "Mini Bar", "Jacuzzi"] },
    ];

    rooms.forEach(room => {
      const roomId = randomUUID();
      this.rooms.set(roomId, { id: roomId, ...room });
    });
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Room methods
  async getRooms(): Promise<Room[]> {
    return Array.from(this.rooms.values());
  }

  async getRoom(id: string): Promise<Room | undefined> {
    return this.rooms.get(id);
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = randomUUID();
    const room: Room = { ...insertRoom, id };
    this.rooms.set(id, room);
    return room;
  }

  async updateRoom(id: string, updates: Partial<InsertRoom>): Promise<Room | undefined> {
    const room = this.rooms.get(id);
    if (!room) return undefined;
    
    const updatedRoom = { ...room, ...updates };
    this.rooms.set(id, updatedRoom);
    return updatedRoom;
  }

  // Booking methods
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async getBookingsByUserId(userId: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(booking => booking.userId === userId);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async updateBooking(id: string, updates: Partial<InsertBooking>): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;
    
    const updatedBooking = { ...booking, ...updates };
    this.bookings.set(id, updatedBooking);
    return updatedBooking;
  }

  // Staff methods
  async getStaff(): Promise<Staff[]> {
    return Array.from(this.staff.values());
  }

  async getStaffMember(id: string): Promise<Staff | undefined> {
    return this.staff.get(id);
  }

  async getStaffByUserId(userId: string): Promise<Staff | undefined> {
    return Array.from(this.staff.values()).find(staff => staff.userId === userId);
  }

  async createStaffMember(insertStaff: InsertStaff): Promise<Staff> {
    const id = randomUUID();
    const staff: Staff = { ...insertStaff, id };
    this.staff.set(id, staff);
    return staff;
  }

  async updateStaffMember(id: string, updates: Partial<InsertStaff>): Promise<Staff | undefined> {
    const staff = this.staff.get(id);
    if (!staff) return undefined;
    
    const updatedStaff = { ...staff, ...updates };
    this.staff.set(id, updatedStaff);
    return updatedStaff;
  }

  // Task methods
  async getTasks(): Promise<Task[]> {
    return Array.from(this.tasks.values());
  }

  async getTask(id: string): Promise<Task | undefined> {
    return this.tasks.get(id);
  }

  async getTasksByStaffId(staffId: string): Promise<Task[]> {
    return Array.from(this.tasks.values()).filter(task => task.staffId === staffId);
  }

  async createTask(insertTask: InsertTask): Promise<Task> {
    const id = randomUUID();
    const task: Task = { 
      ...insertTask, 
      id,
      createdAt: new Date(),
    };
    this.tasks.set(id, task);
    return task;
  }

  async updateTask(id: string, updates: Partial<InsertTask>): Promise<Task | undefined> {
    const task = this.tasks.get(id);
    if (!task) return undefined;
    
    const updatedTask = { ...task, ...updates };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  // Shift methods
  async getShifts(): Promise<Shift[]> {
    return Array.from(this.shifts.values());
  }

  async getShift(id: string): Promise<Shift | undefined> {
    return this.shifts.get(id);
  }

  async getShiftsByStaffId(staffId: string): Promise<Shift[]> {
    return Array.from(this.shifts.values()).filter(shift => shift.staffId === staffId);
  }

  async createShift(insertShift: InsertShift): Promise<Shift> {
    const id = randomUUID();
    const shift: Shift = { ...insertShift, id };
    this.shifts.set(id, shift);
    return shift;
  }

  async updateShift(id: string, updates: Partial<InsertShift>): Promise<Shift | undefined> {
    const shift = this.shifts.get(id);
    if (!shift) return undefined;
    
    const updatedShift = { ...shift, ...updates };
    this.shifts.set(id, updatedShift);
    return updatedShift;
  }
}

export const storage = new MemStorage();
