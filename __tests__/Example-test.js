
it('works', () => {
    expect(1).toBe(1);
});


/**
 * http://facebook.github.io/jest/docs/es-ES/tutorial-react-native.html#content
 * 
 * Now let's use React's test renderer and Jest's snapshot 
 * feature to interact with the component and capture 
 * the rendered output and create a snapshot file:
 * 
 * Sample React Native Snapshot Test
 */
'use strict';

import 'react-native';
import React from 'react';
import Mainlogin from '../screen/login/mainlogin.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Mainlogin />).toJSON();
    expect(tree).toMatchSnapshot();
});

// These serve as integration tests for the jest-react-native preset.
it('renders the ActivityIndicator component', () => {
    const ActivityIndicator = require('ActivityIndicator');
    const tree = renderer
        .create(<ActivityIndicator animating={true} size="small" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Image component', done => {
    const Image = require('Image');
    Image.getSize('path.jpg', (width, height) => {
        const tree = renderer.create(<Image style={{ height, width }} />).toJSON();
        expect(tree).toMatchSnapshot();
        done();
    });
});

it('renders the TextInput component', () => {
    const TextInput = require('TextInput');
    const tree = renderer
        .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the ListView component', () => {
    const ListView = require('ListView');
    const Text = require('Text');
    const dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
    }).cloneWithRows(['apple', 'banana', 'kiwi']);
    const tree = renderer
        .create(
        <ListView
            dataSource={dataSource}
            renderRow={rowData => <Text>{rowData}</Text>}
        />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('usuario', async()=>{
    await element(by.id('usuario')).tap();
    await element(by.id('usuario')).clearText();
    await element(by.id('usuario')).typeText('info@email.com');
})

it('clave', async () => {
    await element(by.id('clave')).tap();
    await element(by.id('clave')).clearText();
    await element(by.id('clave')).typeText('123456');
})





