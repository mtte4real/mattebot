const _0x2d7e01 = _0x4ba2;
function _0x56f4() {
    const _0x3c4b26 = [
        '3554215mrTqcb',
        'profilePictureUrl',
        '2424947NLfDgN',
        'image',
        'find',
        '@s.whatsapp.net',
        './src/admins.jpg',
        'command',
        '1136624aSswds',
        'map',
        '25450nEPUys',
        '10945568GCzWcu',
        'owner',
        'chat',
        '4LpvUpi',
        '\x0a══════\x20•⊰✦⊱•\x20══════\x0a',
        'join',
        '✦👑‌',
        '.\x20@',
        '924941qeCTcq',
        'admins\x20<texto>',
        'filter',
        '3692829ovwHao',
        'admin',
        'split',
        'help',
        'superadmin',
        'group',
        '6QhCCra',
        '3771imqBjS',
        'error.jpg'
    ];
    _0x56f4 = function () {
        return _0x3c4b26;
    };
    return _0x56f4();
}

(function (_0x449326, _0x154a20) {
    const _0x317598 = _0x4ba2,
        _0x5f4613 = _0x449326();
    while (!![]) {
        try {
            const _0x161a82 =
                parseInt(_0x317598(0x177)) / 0x1 +
                -parseInt(_0x317598(0x16c)) / 0x2 +
                parseInt(_0x317598(0x17a)) / 0x3 +
                -parseInt(_0x317598(0x172)) / 0x4 * (parseInt(_0x317598(0x164)) / 0x5) +
                parseInt(_0x317598(0x180)) / 0x6 * (parseInt(_0x317598(0x166)) / 0x7) +
                -parseInt(_0x317598(0x16f)) / 0x8 +
                parseInt(_0x317598(0x181)) / 0x9 * (parseInt(_0x317598(0x16e)) / 0xa);
            if (_0x161a82 === _0x154a20) break;
            else _0x5f4613['push'](_0x5f4613['shift']());
        } catch (_0x5302fe) {
            _0x5f4613['push'](_0x5f4613['shift']());
        }
    }
})(_0x56f4, 0xe0edd);

let handler = async (_0x507d4f, { conn: _0x34eff9, participants: _0xd8d20e, groupMetadata: _0x3367f4, args: _0x51777b }) => {
    const _0x40cb6a = _0x4ba2,
        _0x10d381 = await _0x34eff9[_0x40cb6a(0x165)](_0x507d4f[_0x40cb6a(0x171)], _0x40cb6a(0x167)).catch((_0x5c4644) => null) || _0x40cb6a(0x16a),
        _0x273551 = _0xd8d20e[_0x40cb6a(0x179)]((_0x98236) => _0x98236[_0x40cb6a(0x17b)]),
        _0x25ef2c = _0x273551['map']((_0x2c96f7, _0xf77cae) => `👑 *Admin ${_0xf77cae + 1}:* @${_0x2c96f7['id'][_0x40cb6a(0x17c)]('@')[0x0]}`).join('\x0a'),
        _0xf13b3d =
            _0x3367f4[_0x40cb6a(0x170)] ||
            _0x273551[_0x40cb6a(0x168)]((_0x1a8eee) => _0x1a8eee[_0x40cb6a(0x17b)] === _0x40cb6a(0x17e))?.['id'] ||
            _0x507d4f[_0x40cb6a(0x171)][_0x40cb6a(0x17c)]`-`[0x0] + _0x40cb6a(0x169);

    let _0x53c66a = `
━━━━━━ ✦ Lista Admin ✦ ━━━━━━
${_0x25ef2c}
━━━━━━━━━━━━━━━━━━━━━━━    Vorresti essere anche tu in questa lista eh 🤣`.trim();

    _0x34eff9['sendFile'](_0x507d4f[_0x40cb6a(0x171)], _0x10d381, _0x40cb6a(0x163), _0x53c66a, _0x507d4f, ![], {
        'mentions': [..._0x273551[_0x40cb6a(0x16d)]((_0x2447b4) => _0x2447b4['id']), _0xf13b3d],
    });
};

function _0x4ba2(_0x18e0d7, _0x44da43) {
    const _0x56f479 = _0x56f4();
    return _0x4ba2 = function (_0x4ba2c5, _0x14fcf3) {
        _0x4ba2c5 = _0x4ba2c5 - 0x163;
        let _0x389fa6 = _0x56f479[_0x4ba2c5];
        return _0x389fa6;
    }, _0x4ba2(_0x18e0d7, _0x44da43);
}

handler[_0x2d7e01(0x17d)] = [_0x2d7e01(0x178)];
handler['tags'] = ['group'];
handler[_0x2d7e01(0x16b)] = /^(admins|@admins|dmins)$/i;
handler[_0x2d7e01(0x17f)] = !![];

export default handler;
