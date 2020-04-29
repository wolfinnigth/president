

import _ from 'lodash';

import {buildings} from '../knowledge/buildings';
import {managers} from '../knowledge/managers';
import {upgrades} from '../knowledge/upgrades';

export const default_state = {
    isFull: false,
    
    tab: 'intro',
    
    balances: {money: 0, goods: 0, oil: 0},
    
    
    buildings: _.mapValues(buildings, () => { return {level: 0, fullness: 0, modifier: 1}; }),
    managers:  _.mapValues(managers,  () => { return {hired: false}; }),
    upgrades:  _.mapValues(upgrades,  () => { return {level: 0}; }),
    
    
    
    
    
    game_speed: 3000, // 1000
    frame_rate: 10,
    game_speed_multiplier: 1,
    frame: 0,
    tick: 0,
    game_paused: true,
    game_end: false,
    game_end_score: 0
};



export const getDefaultState = () => {
    let state = _.cloneDeep(default_state);

    state.balances.money = 1;
    state.balances.money = 10000;
    
    // state.balances.buildings = _.mapValues(buildings, () => { return {level: 1}; });

    return state;
};
