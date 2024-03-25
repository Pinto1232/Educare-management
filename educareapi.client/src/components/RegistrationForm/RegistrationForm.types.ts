export interface RegistrationProps {
  name: string;
  email: string;
  password: string;
  title?: string; 
  onPress?: () => void;
}

export interface RegistrationButtonProps {
  title: string;
  onPress: () => void;
}
