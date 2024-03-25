export interface LoginProps {
    title: string;
    onPress: () => void;
}

export interface LoginButtonProps {
    onPress: () => void; 
    title: string; 
  }
  
export interface LoginFormProps{
     username: string;
    password: string;
    RegistrationForm: undefined;
    onSubmit: (username: string, password: string) => void;
}
