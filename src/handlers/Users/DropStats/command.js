'use strict';

const { backButton, send } = require('../../../helpers');
const Handler = require('../../../structures/pieces/Handler');

module.exports = class extends Handler {
  constructor(...args) {
    super(...args, {
      name: 'dropstats',
      types: ['command', 'action'],
    });
  }

  run(ctx) {
    send(ctx, ctx.i18n.t('settings.drop.warning'), [
      [
        {
          text: ctx.i18n.t('menus.settings.dropStats.agreeWarning'),
          callback_data: `dropstats::action`,
        },
      ],
      backButton(ctx, 'settings'),
    ]);
  }
};
