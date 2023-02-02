import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { darkTheme, lightTheme } from "@/constants/constants";

interface ThemeCheckboxProps {
  iconSize: string;
}

export default function ThemeCheckbox(props: ThemeCheckboxProps) {
  const { theme, toggleTheme } = useTheme();

  const checkboxRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = theme === darkTheme;
    }
  }, [theme]);

  return (
    <label className="btn btn-square btn-ghost swap swap-rotate">
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={(event) => {
          toggleTheme(event.currentTarget.checked ? darkTheme : lightTheme);
        }}
      />
      <SunIcon className={`swap-off fill-current ${props.iconSize}`} />
      <MoonIcon className={`swap-on fill-current ${props.iconSize}`} />
    </label>
  );
}
