import React from 'react';
import { Outlet } from 'react-router-dom';
import { Store, ShoppingBag, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">VenMarket</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Conectar Billetera
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden">
        <div className="grid grid-cols-4 gap-1">
          <Link to="/" className="flex flex-col items-center py-3">
            <Store className="h-6 w-6" />
            <span className="text-xs mt-1">Tiendas</span>
          </Link>
          <Link to="/products" className="flex flex-col items-center py-3">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Productos</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center py-3">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center py-3">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;