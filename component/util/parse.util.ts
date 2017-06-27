'use strict';

/**
 * HTML attribute 逻辑运算
 *
 * @param {any} value
 * @returns {boolean}
 */
export function attributeParse (value): boolean {
    if (typeof value !== 'string') return !!value;
    let FALSE_SET = ['0', 'NaN', 'false', 'undefined', 'null'];
    return !FALSE_SET.includes(value);
}
