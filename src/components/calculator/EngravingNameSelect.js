import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { styles } from './styles';

function EngravingNameSelect(props) {
    const { index } = props;
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const COMBAT_ENGRAVINGS = [
        "Adrenaline",
        "All-Out Attack",
        "Ambush Master",
        "Awakening",
        "Barricade",
        "Broken Bone",
        "Contender",
        "Crisis Evasion",
        "Crushing Fist",
        "Cursed Doll",
        "Disrespect",
        "Divine Protection",
        "Drops of Ether",
        "Emergency Rescue",
        "Enhanced Shield",
        "Ether Predator",
        "Expert",
        "Explosive Expert",
        "Fortitude",
        "Grudge",
        "Heavy Armor",
        "Hit Master",
        "Keen Blunt Weapon",
        "Lightning Fury",
        "Magick Stream",
        "Mass Increase",
        "Master Brawler",
        "Master of Escape",
        "Master's Tenacity",
        "Max MP Increase",
        "MP Efficiency Increase",
        "Necromancy",
        "Precise Dagger",
        "Preemptive Strike",
        "Propulsion",
        "Raid Captain",
        "Shield Piercing",
        "Sight Focus",
        "Spirit Absorption",
        "Stabilized Status",
        "Strong Will",
        "Super Charge",
        "Vital Point Hit",
    ]

    const CLASS_ENGRAVINGS = [
        "Remaining Energy",
        "Surge",
        "Hunger",
        "Lunar Voice",
        "Demonic Impulse",
        "Perfect Suppression",
        "Barrage Enhancement",
        "Firepower Enhancement",
        "Enhanced Weapon",
        "Pistoleer",
        "Peacemaker",
        "Time to Hunt",
        "Arthetinean Skill",
        "Evolutionary Legacy",
        "Death Strike",
        "Loyal Companion",
        "Empress's Grace",
        "Order of the Emperor",
        "Desperate Salvation",
        "True Courage",
        "Igniter",
        "Reflux",
        "Communication Overflow",
        "Master Summoner",
        "Control",
        "Pinnacle",
        "Shock Training",
        "Ultimate Skill: Taijutsu",
        "Energy Overflow",
        "Robust Spirit",
        "Deathblow",
        "Esoteric Flurry",
        "Esoteric Skill Enhancement",
        "First Intention",
        "Full Bloom",
        "Recurrence",
        "Berserker's Technique",
        "Mayhem",
        "Gravity Training",
        "Rage Hammer",
        "Combat Readiness",
        "Lone Knight",
        "Blessed Aura",
        "Judgment",
        "Predator",
        "Punisher",
    ]

    return (
        <FormControl sx={styles.formControl}>
            <InputLabel>{`Engraving ${index}`}</InputLabel>
            <Select
                label={`Engraving ${index}`}
                value={value}
                onChange={handleChange}
            >
                {COMBAT_ENGRAVINGS.map(combatEngraving => <MenuItem key={combatEngraving} value={combatEngraving}>{combatEngraving}</MenuItem>)}
                {CLASS_ENGRAVINGS.map(classEngraving => <MenuItem key={classEngraving} value={classEngraving}>{classEngraving}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

EngravingNameSelect.propTypes = {
    index: PropTypes.number.isRequired
};

export default EngravingNameSelect;