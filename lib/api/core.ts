import wretch from 'wretch'
import { API_URL } from '../constants/core'

export const api = wretch(API_URL)
