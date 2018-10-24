import React from "react";
import 'react-native';
import NoFeed from "../src/component/NoFeed";
import { shallow } from 'enzyme';

describe("runLoading ", () =>{
    test('check if NoFeed is rendered properly', () => {
      const wrapper = shallow(<NoFeed message="hello world" />).props();
      expect(wrapper.children[1].props.children.props.children).toEqual("hello world");
    })
})
