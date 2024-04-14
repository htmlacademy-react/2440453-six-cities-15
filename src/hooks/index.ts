import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type { TAppDispatch} from '../types';
import { State } from '../store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

