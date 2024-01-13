import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a="2" b="3" />
    <br />
    <Sum a="-5" b="5" />
    <br />
    <Sum a="10" b="0" />
    <br />
    <Sum a="0" b="5" />
    <br />
    <Sum a="0" b="0" />
  </>
);
