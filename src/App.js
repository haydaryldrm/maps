import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function App() {
  const mapState = { center: [55.76, 37.64], zoom: 10 };

  return (
    <YMaps>
      <div style={{  height: '1000px' }}>
      <Map
        width={'100%'}
        height={'400px'}
        defaultState={{
          center: [55.76, 37.64],
          zoom: 10,
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        lang={'en_US'} // harita dilini İngilizce olarak ayarlar
        />
      </div>
    </YMaps>
  );
}

export default App;
