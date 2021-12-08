import { getExpoPushTokenAsync, scheduleNotificationAsync } from "expo-notifications";
import * as Permissions from "expo-permissions";

const registerForPushNotifications = async () => {
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await getExpoPushTokenAsync();
    return token;
  } catch (error) {
    console.log("Error getting a token", error);
  }
};

const createSender = async () => {
  // Get Token
  const token = await registerForPushNotifications();

  // function for sending push notifications
  const sendPushNotification = async (message) => {
    scheduleNotificationAsync({
      content: {
        title: "Time's up!",
        body: 'Change sides!',
      },
      trigger: {
        seconds: 60,
      },
    });
  };

  return sendPushNotification;
};

export default createSender;
