import { MetadataRoute } from 'next'
import {
  APP_NAME,
  APP_DESC,
} from "app-config";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESC,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  }
}