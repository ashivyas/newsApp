import React from "react";
import 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HeaderCompoent from '../src/component/Filter';
import  '../src/api/NewsApi';
import { NewsApi } from "../src/api/NewsApi";


describe("runFilter ", () =>{
    test('check if Filter state is handled properly', () => {
      let FilterData = renderer.create(<HeaderCompoent />).getInstance()
      FilterData.onStateValueChange(100);
      expect(FilterData.state.selected).toEqual(100);
    })

})
