import React, { useState } from 'react';
import { Moon, Sun, Globe, Volume2, Bell, Shield, Eye } from 'lucide-react';
import './settings.css';

function Settings() {
  // Load settings from localStorage or use defaults
  const loadStoredSettings = () => {
    const storedSettings = localStorage.getItem('skoolGamesSettings');
    return storedSettings ? JSON.parse(storedSettings) : {
      theme: 'dark',
      language: 'en',
      notifications: true,
      sound: true,
      highContrast: false,
      privacyMode: false
    };
  };

  const [settings, setSettings] = useState(loadStoredSettings());

  // Apply settings on initial load
  React.useEffect(() => {
    applySettings(settings);
  }, [settings]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  // Function to apply all settings
  const applySettings = (currentSettings) => {
    // Apply theme
    document.body.className = currentSettings.theme;
    
    // Apply high contrast
    if (currentSettings.highContrast) {
      document.documentElement.style.setProperty('--primary-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#4a90e2');
      document.documentElement.style.setProperty('--text-color', currentSettings.theme === 'dark' ? '#ffffff' : '#1a1a1a');
      document.documentElement.style.setProperty('--bg-color', currentSettings.theme === 'dark' ? '#1a1a1a' : '#ffffff');
    }

    // Apply language
    document.documentElement.lang = currentSettings.language;

    // Apply privacy mode
    if (currentSettings.privacyMode) {
      // Disable analytics and tracking if they exist
      window._disableAnalytics = true;
    }

    // Handle notifications
    if (currentSettings.notifications) {
      if ("Notification" in window) {
        Notification.requestPermission();
      }
    }

    // Handle sound settings
    if (!currentSettings.sound) {
      // Mute all audio elements
      document.querySelectorAll('audio, video').forEach(el => {
        el.muted = true;
      });
    }

    // Save to localStorage
    localStorage.setItem('skoolGamesSettings', JSON.stringify(currentSettings));
  };

  const handleSettingChange = (setting, value) => {
    const newSettings = {
      ...settings,
      [setting]: value
    };
    
    setSettings(newSettings);
    applySettings(newSettings);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Customize your Skool Games experience</p>
      </div>

      <div className="settings-grid">
        {/* Theme Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            {settings.theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            <h2>Theme</h2>
          </div>
          <div className="theme-switcher">
            <button
              className={settings.theme === 'light' ? 'active' : ''}
              onClick={() => handleSettingChange('theme', 'light')}
            >
              <Sun size={16} />
              Light
            </button>
            <button
              className={settings.theme === 'dark' ? 'active' : ''}
              onClick={() => handleSettingChange('theme', 'dark')}
            >
              <Moon size={16} />
              Dark
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Globe size={24} />
            <h2>Language</h2>
          </div>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className="language-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sound Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Volume2 size={24} />
            <h2>Sound</h2>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.sound}
              onChange={(e) => handleSettingChange('sound', e.target.checked)}
            />
            <span className="toggle-slider"></span>
            Game sounds and effects
          </label>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Bell size={24} />
            <h2>Notifications</h2>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
            />
            <span className="toggle-slider"></span>
            Game updates and news
          </label>
        </div>

        {/* Accessibility Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Eye size={24} />
            <h2>Accessibility</h2>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
            />
            <span className="toggle-slider"></span>
            High contrast mode
          </label>
        </div>

        {/* Privacy Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Shield size={24} />
            <h2>Privacy</h2>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.privacyMode}
              onChange={(e) => handleSettingChange('privacyMode', e.target.checked)}
            />
            <span className="toggle-slider"></span>
            Enhanced privacy mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
