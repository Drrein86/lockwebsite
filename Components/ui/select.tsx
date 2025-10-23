import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { value, onValueChange, isOpen, setIsOpen });
        }
        return child;
      })}
    </div>
  );
};

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  children: React.ReactNode;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className = '',
  value,
  isOpen,
  setIsOpen,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-900/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

interface SelectValueProps {
  placeholder?: string;
  value?: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};

interface SelectContentProps {
  value?: string;
  onValueChange?: (value: string) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  children: React.ReactNode;
}

export const SelectContent: React.FC<SelectContentProps> = ({
  value,
  onValueChange,
  isOpen,
  setIsOpen,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen && setIsOpen(false)}
      />
      <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-lg border border-gray-700 bg-gray-900 p-1 shadow-lg">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, {
              value,
              onValueChange,
              setIsOpen,
            });
          }
          return child;
        })}
      </div>
    </>
  );
};

interface SelectItemProps {
  value: string;
  onValueChange?: (value: string) => void;
  setIsOpen?: (open: boolean) => void;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({
  value: itemValue,
  onValueChange,
  setIsOpen,
  children,
}) => {
  return (
    <div
      className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm text-gray-200 outline-none hover:bg-gray-800 focus:bg-gray-800"
      onClick={() => {
        onValueChange && onValueChange(itemValue);
        setIsOpen && setIsOpen(false);
      }}
    >
      {children}
    </div>
  );
};

