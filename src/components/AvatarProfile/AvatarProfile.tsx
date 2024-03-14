import { FC } from 'react';
// import Avatar from 'react-avatar';

import { IAvatarProfileProps } from '@interfaces/IAvatarProfileProps';

const AvatarProfile: FC<IAvatarProfileProps> = ({
  photoURL,
  displayName,
  size,
}) => {
  console.log('AVATAR');
  return photoURL && displayName ? (
    <img
      className="rounded-full shadow-secondaryShadow transition-all duration-150 group-hover:scale-105"
      width={size}
      height={size}
      src={photoURL}
      alt={displayName}
    />
  ) : (
    <div
      className="rounded-full shadow-secondaryShadow transition-all duration-150 group-hover:scale-105"
      style={{
        width: size,
        height: size,
      }}
    >
      <p className="bg-gray-300">displayName</p>
    </div>
    // <Avatar
    //   className="rounded-full shadow-secondaryShadow transition-all duration-150 group-hover:scale-105"
    //   name={`${displayName}`}
    //   size={size}
    //   textSizeRatio={0}
    // />
  );
};

export default AvatarProfile;