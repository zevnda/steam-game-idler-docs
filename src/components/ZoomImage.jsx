import { Fragment } from 'react';
import { ImageZoom } from 'nextra/components'

export default function ZoomImage({ src }) {
    return (
        <Fragment>
            <div className='flex flex-col items-center w-fit'>
                <ImageZoom
                    className='mt-5 border border-gray-500 rounded-md'
                    style={{ cursor: 'pointer' }}
                    src={src}
                    alt="example"
                    width={250}
                    height={250}
                />
                <p className='text-xs text-gray-500'>
                    Click to expand
                </p>
            </div>
        </Fragment>
    );
}