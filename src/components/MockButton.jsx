import { Fragment } from 'react';
import { MdEdit } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbCardsFilled } from 'react-icons/tb';
import { TiPlus } from 'react-icons/ti';

export default function MockButton({ type, content }) {
    if (type === 'unlock') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Unlock
                </span>
            </Fragment>
        );
    } else if (type === 'lock') {
        return (
            <Fragment>
                <span className="inline bg-red-500 text-white text-[10px] font-semibold px-1 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Lock
                </span>
            </Fragment>
        );
    } else if (type === 'unlock-all') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Unlock All
                </span>
            </Fragment>
        );
    } else if (type === 'lock-all') {
        return (
            <Fragment>
                <span className="inline bg-red-500 text-white text-[10px] font-semibold px-1 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Lock All
                </span>
            </Fragment>
        );
    } else if (type === 'edit') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    <MdEdit fontSize={14} className="inline" /> Edit List
                </span>
            </Fragment>
        );
    } else if (type === 'card-farming') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    <TbCardsFilled fontSize={14} className="inline" /> Start Card Farming
                </span>
            </Fragment>
        );
    } else if (type === 'achievement-unlocker') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    <FaAward fontSize={14} className="inline" /> Start Achievement Unlocker
                </span>
            </Fragment>
        );
    } else if (type === 'done') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Done
                </span>
            </Fragment>
        );
    } else if (type === 'save') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Save
                </span>
            </Fragment>
        );
    } else if (type === 'save-changes') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    Save Changes
                </span>
            </Fragment>
        );
    } else if (type === 'context-add') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    <TiPlus fontSize={14} className="inline" /> {content}
                </span>
            </Fragment>
        );
    } else if (type === 'context-cog') {
        return (
            <Fragment>
                <span className="inline bg-white text-black text-[10px] font-semibold px-1.5 py-1.5 rounded-sm shadow-sm select-none mx-1">
                    <IoSettingsSharp fontSize={14} className="inline" />{' '}
                    {content}
                </span>
            </Fragment>
        );
    }
}
