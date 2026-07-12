import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from '@/components/ui/loader-icon';
import { LayoutGridIcon, FolderIcon, ClipboardIcon, KeyIcon, LogoutIcon, MenuIcon, XIcon } from '@animateicons/react/lucide';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useRef, useState, useEffect } from 'react';
