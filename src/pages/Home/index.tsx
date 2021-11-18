import { useState } from 'react';
import { MapContainer, Marker, Tooltip, TileLayer } from 'react-leaflet';
import Leaflet, { Map as LeafletMap } from 'leaflet';

import * as Styled from './styles';
import circleImg from '../../assets/circle.svg';
import circleOutlineImg from '../../assets/circle-outline.svg';

import { Aside } from '../../components/Aside';
import { Point } from '../../types';

const markerIcon = new Leaflet.Icon({
  iconUrl: circleImg,
  iconSize: [16, 16],
  iconAnchor: [15, 15],
});

const markerIconSelected = new Leaflet.Icon({
  iconUrl: circleOutlineImg,
  iconSize: [16, 16],
  iconAnchor: [15, 15],
});

const points: Point[] = [
  { id: 1, number: "00001341", lat: -8.739286275114816, lng: -63.89267563819886, address: "Rua Davi Canabarro, 3328", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 2, number: "00000129", lat: -8.739282298512196, lng: -63.89276415109635, address: "Rua Davi Canabarro, 3340", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 3, number: "00001023", lat: -8.739278321909524, lng: -63.89285266399384, address: "Rua Davi Canabarro, 3342", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 4, number: "00001123", lat: -8.739274345306812, lng: -63.892946541309364, address: "Rua Davi Canabarro, 3344", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 5, number: "00001124", lat: -8.739269043169797, lng: -63.89303237199784, address: "Rua Davi Canabarro, 3346", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 6, number: "00001125", lat: -8.739263741032705, lng: -63.89312759041787, address: "Rua Davi Canabarro, 3348", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 7, number: "00001188", lat: -8.739261089964135, lng: -63.89323756098748, address: "Rua Davi Canabarro, 3350", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 8, number: "00001126", lat: -8.739259764429843 , lng: -63.893381059169776, address: "Rua Davi Canabarro, 3352", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 9, number: "00001151", lat: -8.739258438895538, lng: -63.89346823096277, address: "Rua Davi Canabarro, 3354", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 10, number: "00001192", lat: -8.739259764429843, lng: -63.893570154905326, address: "Rua Davi Canabarro, 3356", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 11, number: "00001185", lat: -8.739262415498427, lng: -63.893665373325355, address: "Rua Davi Canabarro, 3358", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 12, number: "00001195", lat: -8.739243858017943, lng: -63.89265418052674, address: "Rua Flores da Cunha, 3360", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 13, number: "00001200", lat: -8.739163000413665, lng: -63.892651498317726, address: "Rua Flores da Cunha, 3362", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 14, number: "00001205", lat: -8.73909009600131, lng: -63.892650157213225, address: "Rua Flores da Cunha, 3364", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 15, number: "00001205", lat: -8.73900658729328, lng: -63.8926474750042, address: "Rua Flores da Cunha, 3366", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 16, number: "00001210", lat: -8.73892042749555, lng: -63.89264345169068, address: "Rua Flores da Cunha, 3368", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 17, number: "00001212", lat: -8.738831616606273, lng: -63.89264211058617, address: "Rua Flores da Cunha, 3370", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 18, number: "00001214", lat: -8.739356528420906, lng: -63.89265283942223, address: "Rua Flores da Cunha, 3372", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 19, number: "00001216", lat: -8.739433409382196, lng: -63.892651498317726, address: "Rua Flores da Cunha, 3374", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 20, number: "00001218", lat: -8.739511615861023, lng: -63.89264881610871, address: "Rua Flores da Cunha, 3376", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 21, number: "00001220", lat: -8.739592473389694, lng: -63.89264345169068, address: "Rua Flores da Cunha, 3378", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 22, number: "00001222", lat: -8.739672005367979, lng: -63.89263808727265, address: "Rua Flores da Cunha, 3378", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 23, number: "00001224", lat: -8.7392902517174, lng: -63.89260321855546, address: "Rua Davi Canabarro, 3360", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 24, number: "00001226", lat: -8.739292902785769, lng: -63.89253482222558, address: "Rua Davi Canabarro, 3362", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 25, number: "00001228", lat: -8.739294228319945, lng: -63.89246374368668, address: "Rua Davi Canabarro, 3364", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 26, number: "00001230", lat: -8.739298204922452, lng: -63.89238059520722, address: "Rua Davi Canabarro, 3366", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 27, number: "00001232", lat: -8.739296879388288, lng: -63.89229744672776, address: "Rua Davi Canabarro, 3368", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 28, number: "00001234", lat: -8.739292902785769, lng: -63.89221832156183, address: "Rua Davi Canabarro, 3370", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 29, number: "00001236", lat: -8.739283624046411, lng: -63.89213114976884, address: "Rua Davi Canabarro, 3372", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 30, number: "00001236", lat: -8.739273019772558, lng: -63.89204934239388, address: "Rua Davi Canabarro, 3374", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 32, number: "00001238", lat: -8.739261089964135, lng: -63.89375120401383, address: "Rua Davi Canabarro, 3374", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 33, number: "00001224", lat: -8.739752862861842, lng: -63.89263004064561, address: "Rua Flores da Cunha, 3380", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 34, number: "00001226", lat: -8.73914179185881, lng: -63.893324732780464, address: "Rua Lajeado, 3382", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 35, number: "00001228", lat: -8.73907418958217, lng: -63.89332205057145, address: "Rua Lajeado, 3384", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 36, number: "00001230", lat: -8.739010563898841, lng: -63.89331668615342, address: "Rua Lajeado, 3386", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 37, number: "00001232", lat: -8.738938984992126, lng: -63.89331132173539, address: "Rua Lajeado, 3388", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 38, number: "00001234", lat: -8.73886077839314, lng: -63.89330595731736, address: "Rua Lajeado, 3390", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 39, number: "00001236", lat: -8.73921999839883, lng: -63.89332875609399, address: "Rua Lajeado, 3392", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 40, number: "00001238", lat: -8.739328692206868, lng: -63.89332875609399, address: "Rua Lajeado, 3394", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 41, number: "00001240", lat: -8.739409549775207, lng: -63.89332741498948, address: "Rua Lajeado, 3396", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 42, number: "00001242", lat: -8.739487756259047, lng: -63.89332741498948, address: "Rua Lajeado, 3398", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 43, number: "00001244", lat: -8.739567288259698, lng: -63.89332607388497, address: "Rua Lajeado, 3400", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 44, number: "00001246", lat: -8.73964814577627, lng: -63.89332339167596, address: "Rua Lajeado, 3402", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 45, number: "00001250", lat: -8.739740933068761, lng: -63.89332339167596, address: "Rua Lajeado, 3404", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 46, number: "00001252", lat: -8.739324715604692, lng: -63.89375790953637, address: "Rua Sao Goncalo, 3406", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 47, number: "00001254", lat: -8.739396294437338, lng: -63.893759250640876, address: "Rua Sao Goncalo, 3408", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 48, number: "00001256", lat: -8.739469198789797, lng: -63.89376193284989, address: "Rua Sao Goncalo, 3410", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 49, number: "00001258", lat: -8.739548730794393, lng: -63.8937632739544, address: "Rua Sao Goncalo, 3412", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 50, number: "00001260", lat: -8.73962561171604, lng: -63.8937632739544, address: "Rua Sao Goncalo, 3414", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
  { id: 51, number: "00001262", lat: -8.739706469219966, lng: -63.89376729726792, address: "Rua Sao Goncalo, 3416", district: "Costa e Silva", city: "Porto Velho", state: "Rondônia", cep: "76803-632" },
















];

export default function Home() {
  const [map, setMap] = useState<LeafletMap>();
  const [show, setShow] = useState(false);
  const [currentPoint, setCurrentPoint] = useState<Point>();
  
  async function handleShowDetails(point: Point) {
    setCurrentPoint(undefined);
    setShow(true);

    map?.setView([point.lat, point.lng], map.getZoom());
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    setCurrentPoint(point);
  } 


  return (
    <Styled.Wrapper>
      <MapContainer 
        style={{
          width: '100%',
          height: '100%',
        }}
        center={[-8.739301201747507, -63.89291578975075]}
        zoom={20}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          maxZoom={20}
          url={`https://api.mapbox.com/styles/v1/neiltonsb/ckvsvwxwf1foz14oyt0k1cyvj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmVpbHRvbnNiIiwiYSI6ImNrajNmMTEyZTJmdncycXF0emRoNXprcDkifQ.H-TLUkX_hUBBBcqIj9ZczQ`}
        />

        {points.map(point => (
          <Marker
            draggable
            riseOnHover={true}
            key={point.id}
            icon={point.id === currentPoint?.id ? markerIconSelected : markerIcon}
            position={[point.lat, point.lng]} 
            eventHandlers={{
              click: () => handleShowDetails(point),
              dragend: (event) => console.log(event.target._latlng)
            }}
          >
            <Tooltip 
              direction="top"
              offset={[-8, -20]}
            >
              #{point.number}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <Aside
        point={currentPoint}
        setShow={setShow} 
        show={show} 
      />
    </Styled.Wrapper>
  )
}