import { Fragment } from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <Fragment>
            <div className='flex items-center gap-2'>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                />
                <p className='font-semibold'>
                    Steam Game Idler
                </p>
            </div>
        </Fragment>
    );
}