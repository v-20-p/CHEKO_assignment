'use client';


import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGl from '@/components/map/Map';
import { useAppSelector } from '@/store/store';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGlkdjIwIiwiYSI6ImNtOXF5dnVndDFsOXQycXNhdDJ4dXQydHYifQ.vS-mMX7ZdUgN2w4Qx9SrWA';

export default function MapPage() {

  const { items, loading, error } = useAppSelector((state) => state.menu);






  return (
<MapGl items={items}/>
  );
}
