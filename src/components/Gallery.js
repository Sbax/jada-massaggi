import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from './Lightbox';

const GalleryContainer = styled.section`
  display: flex;
  > * {
    flex: 1;
  }
`;

const Picture = styled.img`
  max-width: 100%;
  max-height: 100%;

  cursor: pointer;
`;

const Gallery = ({ gallery }) => {
  const [active, setActive] = useState();

  return (
    <>
      <GalleryContainer>
        {gallery.map((picture, i) => (
          <article key={picture} onClick={() => setActive(i)}>
            <Picture src={picture} />
          </article>
        ))}
      </GalleryContainer>

      {(active || active === 0) && (
        <Lightbox
          current={gallery[active]}
          close={() => setActive()}
          previous={() =>
            setActive((gallery.length + (active - 1)) % gallery.length)
          }
          next={() => setActive((active + 1) % gallery.length)}
        />
      )}
    </>
  );
};

export default Gallery;
