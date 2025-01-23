'use client'
import { Fragment } from 'react';
import { useTheme } from 'next-themes'
import { IoGameController, IoSettingsSharp } from 'react-icons/io5'
import { FaAward } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { IoPlay } from 'react-icons/io5'

export default function Icon({ type, size = 28 }) {
    const { resolvedTheme } = useTheme();

    const iconStyles = {
        display: 'inline',
        marginInline: 4,
        background: resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        padding: 4,
        borderRadius: 4
    };

    return (
        <Fragment>
            {type === 'game' && <IoGameController fontSize={size} style={iconStyles} />}
            {type === 'award' && <FaAward fontSize={size} style={iconStyles} />}
            {type === 'play' && <IoPlay fontSize={size} style={iconStyles} />}
            {type === 'cog' && <IoSettingsSharp fontSize={size} style={iconStyles} />}
            {type === 'dots' && <BiDotsVerticalRounded fontSize={size} style={iconStyles} />}
        </Fragment>
    );
}