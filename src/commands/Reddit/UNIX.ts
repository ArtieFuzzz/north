import { ApplyOptions } from '@sapphire/decorators'
import type { PieceContext } from '@sapphire/framework'
import type { AstraeaCommandOptions } from '#lib/Structures/BaseCommand'
import { AstraeaRedditCommand } from '#lib/Structures/commands/RedditCommand'

@ApplyOptions<AstraeaCommandOptions>({
  name: 'unix',
  aliases: ['linux'],
  description: 'Returns a Image from r/UNIXPorn',
  cooldownLimit: 3,
  cooldownDelay: 2000
})
export default class UNIXPorn extends AstraeaRedditCommand {
  constructor(Context: PieceContext, options: AstraeaCommandOptions) {
    super({ subreddit: 'UNIXPorn', nsfw: false, colour: 'DARK_BUT_NOT_BLACK' }, Context, options)
  }
}
