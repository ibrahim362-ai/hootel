import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  });

  const { login, register, isLoading } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      toast({
        title: "Login successful!",
        description: "Welcome back to HotelERP",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        username,
        password,
        ...formData
      });
      toast({
        title: "Registration successful!",
        description: "Your account has been created",
      });
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Registration failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <motion.div
              className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHotel className="text-2xl text-primary-foreground" />
            </motion.div>
            <CardTitle className="text-2xl font-bold">
              {isRegistering ? 'Create Account' : 'Welcome to HotelERP'}
            </CardTitle>
            <CardDescription>
              {isRegistering 
                ? 'Sign up for a new account' 
                : 'Sign in to your account to continue'
              }
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Demo credentials:</p>
              <p><strong>Admin:</strong> admin / admin123</p>
              <p><strong>Staff:</strong> staff / staff123</p>
              <p><strong>Guest:</strong> guest / guest123</p>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
              {isRegistering && (
                <>
                  <div>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full p-3 border border-input rounded-lg bg-background"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      data-testid="select-role"
                    >
                      <option value="user">Guest</option>
                      <option value="employer">Staff Member</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                </>
              )}
              
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  data-testid="input-username"
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="input-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary border-0 text-white hover:opacity-90 transition-opacity"
                disabled={isLoading}
                data-testid="button-submit"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  isRegistering ? 'Create Account' : 'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                className="text-primary hover:text-primary/80 text-sm font-medium"
                onClick={() => setIsRegistering(!isRegistering)}
                data-testid="button-toggle-mode"
              >
                {isRegistering 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
