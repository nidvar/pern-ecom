import { create } from 'zustand';
import type { ThemeStoreType } from '../types';

export const useThemeStore = create<ThemeStoreType>(function(set){
    return {
        theme: localStorage.getItem('theme') || '',
        setTheme: function(theme){
            set({
                theme: theme.toLowerCase()
            });
            localStorage.setItem('theme', theme);
        }
    }
});