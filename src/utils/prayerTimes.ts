export interface PrayerTime {
  name: string;
  time: string;
}

export const getPrayerTimes = (city: string): PrayerTime[] => {
  // This is a placeholder. In a real application, this would fetch from an API
  return [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Sunrise', time: '6:45 AM' },
    { name: 'Dhuhr', time: '1:30 PM' },
    { name: 'Asr', time: '4:45 PM' },
    { name: 'Maghrib', time: '6:30 PM' },
    { name: 'Isha', time: '8:00 PM' }
  ];
};