import { Fragment } from 'react';
import { IoGameController, IoSettingsSharp, IoPlay } from 'react-icons/io5';
import { FaAward, FaSignOutAlt, FaHourglassEnd } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { TbCardsFilled } from 'react-icons/tb';
import { MdFavorite } from 'react-icons/md';
import { FaGift } from 'react-icons/fa6';

export default function Icon({ type }) {
    const iconStyles = {
        display: 'inline',
        marginInline: 4,
        padding: 4,
        borderRadius: 4,
    };

    return (
        <Fragment>
            {type === 'game' && (
                <IoGameController
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'cards' && (
                <TbCardsFilled
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'award' && (
                <FaAward
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'hourglass' && (
                <FaHourglassEnd
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'heart' && (
                <MdFavorite
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'gift' && (
                <FaGift
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'play' && (
                <IoPlay
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'cog' && (
                <IoSettingsSharp
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'dots' && (
                <BiDotsVerticalRounded
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black"
                />
            )}
            {type === 'signout' && (
                <FaSignOutAlt
                    fontSize={24}
                    style={iconStyles}
                    className="shadow-sm bg-white text-black rotate-180"
                />
            )}
        </Fragment>
    );
}
