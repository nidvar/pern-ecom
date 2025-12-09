import { create } from 'zustand';
import type { ThemeStoreType } from '../types';

export const useThemeStore = create<ThemeStoreType>(function(set){
    return {
        theme: localStorage.getItem('theme') || 'garden',
        setTheme: function(theme){
            set({
                theme: theme
            })
        }
    }
});