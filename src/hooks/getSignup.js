import { useEffect, useState } from 'react';
import { getUserSignUp } from '../service/fetchSignup';


const [email, setEmail] = useState('');
const [password, setPassword]
