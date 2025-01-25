'use client';
import React, { useState, useEffect, Fragment } from 'react';

export default function References({ children, page }) {
    const [references, setReferences] = useState([]);

    useEffect(() => {
        const searchWords = {
            'sgi': 'sgi',
            'account selection': 'account-selection',
            'dashboard': 'dashboard',
            'sidebar': 'sidebar',
            'games list': 'games-list',
            'game card': 'game-card',
            'game card menu': 'game-card-menu',
            'favorites list': 'favorites-list',
            'card farming list': 'card-farming-list',
            'achievement unlocker list': 'achievement-unlocker-list',
            'auto idle list': 'auto-idle-list',
            'idle windows': 'idle-windows-steamutilityexe',
            'steamutility.exe': 'idle-windows-steamutilityexe',
            'dropdown sort menu': 'dropdown-sort-menu',
        };
        const foundRefs = [];

        const extractText = (child) => {
            if (typeof child === 'string') return child;
            if (React.isValidElement(child)) {
                if (child.type === 'h3' || child.type === 'summary') return '';
                return React.Children.toArray(child.props.children)
                    .map(extractText)
                    .join(' ');
            }
            return '';
        };

        const searchText = React.Children.toArray(children)
            .map(extractText)
            .join(' ');

        Object.keys(searchWords).forEach((word) => {
            const index = searchText.toLowerCase().indexOf(word.toLowerCase());
            if (index !== -1) {
                foundRefs.push({ word, href: searchWords[word], index });
            }
        });

        foundRefs.sort((a, b) => a.index - b.index);

        if (foundRefs.length > 0) {
            setReferences(foundRefs);
        }
    }, [children]);

    const capitalizeWords = (str) => {
        const exceptions = ['SGI'];
        return str.split(' ').map(word => {
            if (exceptions.includes(word.toUpperCase())) {
                return word.toUpperCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };

    useEffect(() => {
        const referencesHeader = document.querySelector('h2#references');
        if (referencesHeader && references.length > 0) {
            if (!referencesHeader.nextElementSibling || referencesHeader.nextElementSibling.tagName !== 'OL') {
                const ol = document.createElement('ol');
                ol.className = 'x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-decimal x:ms-6';
                references.forEach((ref) => {
                    const li = document.createElement('li');
                    li.className = 'x:my-2';
                    const a = document.createElement('a');
                    a.className = 'x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]';
                    a.href = `/references#${ref.href}`;
                    a.textContent = capitalizeWords(ref.word);
                    li.appendChild(a);
                    ol.appendChild(li);
                });
                referencesHeader.insertAdjacentElement('afterend', ol);
            }
        }
    }, [references]);

    const wrapReferences = (child) => {
        if (typeof child === 'string') {
            let modifiedText = child;
            references.forEach((ref, index) => {
                const regex = new RegExp(`(${ref.word})`, 'gi');
                modifiedText = modifiedText.replace(regex, `$1<a href='${page}#references'><sub class='text-blue-400'>[${index + 1}]</sub></a>`);
            });
            return <span dangerouslySetInnerHTML={{ __html: modifiedText }} />;
        }
        if (React.isValidElement(child)) {
            if (child.type === 'h3' || child.type === 'summary') return child;
            return React.cloneElement(child, {
                children: React.Children.map(child.props.children, wrapReferences),
            });
        }
        return child;
    };

    return (
        <Fragment>
            {React.Children.map(children, wrapReferences)}
        </Fragment>
    );
}