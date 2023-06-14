import { cva, VariantProps } from 'cva';

const button = cva('button rounded-md border', {
  variants: {
    intent: {
      primary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
      ],
    },
    size: {
      small: ['text-sm', 'px-2', 'py-1'],
      medium: ['px-3', 'py-2'],
      large: ['text-lg', 'px-4', 'py-3'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export function Button({
  intent,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {children}
    </button>
  );
}

export default Button;
