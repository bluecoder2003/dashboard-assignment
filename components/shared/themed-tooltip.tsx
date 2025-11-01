import { useTheme } from "@/components/custom/theme-provider";

interface ThemedTooltipStylesOptions {
  backgroundColor?: {
    light: string;
    dark: string;
  };
  borderColor?: {
    light: string;
    dark: string;
  };
  textColor?: {
    light: string;
    dark: string;
  };
  labelColor?: {
    light: string;
    dark: string;
  };
  itemColor?: {
    light: string;
    dark: string;
  };
  fontSize?: string;
  borderRadius?: string;
}

export const useThemedTooltipStyles = (options?: ThemedTooltipStylesOptions) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const defaults = {
    backgroundColor: { light: '#ffffff', dark: '#272727' },
    borderColor: { light: '#e5e7eb', dark: '#444444' },
    textColor: { light: '#1f2937', dark: '#FFFFFF' },
    labelColor: { light: '#6b7280', dark: '#FFFFFF' },
    itemColor: { light: '#1f2937', dark: '#7E7E7E' },
    fontSize: '14px',
    borderRadius: '8px',
  };

  const settings = { ...defaults, ...options };

  return {
    isDark,
    contentStyle: {
      backgroundColor: isDark ? settings.backgroundColor.dark : settings.backgroundColor.light,
      border: `1px solid ${isDark ? settings.borderColor.dark : settings.borderColor.light}`,
      borderRadius: settings.borderRadius,
      color: isDark ? settings.textColor.dark : settings.textColor.light,
      fontSize: settings.fontSize,
    },
    labelStyle: {
      color: isDark ? settings.labelColor.dark : settings.labelColor.light,
      fontSize: settings.fontSize,
    },
    itemStyle: {
      color: isDark ? settings.itemColor.dark : settings.itemColor.light,
      fontSize: settings.fontSize,
    },
  };
};

