const RawData = {
  data: {
    __typename: 'Tweet',
    lang: 'en',
    favorite_count: 13,
    possibly_sensitive: false,
    created_at: '2023-07-01T07:11:35.000Z',
    display_text_range: [0, 39],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: 'pic.twitter.com/5P2YDyB0Or',
          expanded_url: 'https://twitter.com/mayurbhoii/status/1675039428610502656/photo/1',
          indices: [40, 63],
          url: 'https://t.co/5P2YDyB0Or',
        },
      ],
    },
    id_str: '1675039428610502656',
    text: 'where did my math superpowers go ☹️☹️☹️ https://t.co/5P2YDyB0Or',
    user: {
      id_str: '749528490274353152',
      name: 'mayur',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/1697748968032047104/g3c6FSTj_normal.jpg',
      screen_name: 'mayurbhoii',
      verified: false,
      is_blue_verified: false,
      profile_image_shape: 'Circle',
    },
    edit_control: {
      edit_tweet_ids: ['1675039428610502656'],
      editable_until_msecs: '1688199095000',
      is_edit_eligible: true,
      edits_remaining: '5',
    },
    mediaDetails: [
      {
        display_url: 'pic.twitter.com/5P2YDyB0Or',
        expanded_url: 'https://twitter.com/mayurbhoii/status/1675039428610502656/photo/1',
        ext_media_availability: { status: 'Available' },
        indices: [40, 63],
        media_url_https: 'https://pbs.twimg.com/media/Fz7vefraAAM96eZ.jpg',
        original_info: {
          height: 1536,
          width: 2048,
          focus_rects: [
            { x: 0, y: 0, w: 2048, h: 1147 },
            { x: 0, y: 0, w: 1536, h: 1536 },
            { x: 0, y: 0, w: 1347, h: 1536 },
            { x: 0, y: 0, w: 768, h: 1536 },
            { x: 0, y: 0, w: 2048, h: 1536 },
          ],
        },
        sizes: {
          large: { h: 1536, resize: 'fit', w: 2048 },
          medium: { h: 900, resize: 'fit', w: 1200 },
          small: { h: 510, resize: 'fit', w: 680 },
          thumb: { h: 150, resize: 'crop', w: 150 },
        },
        type: 'photo',
        url: 'https://t.co/5P2YDyB0Or',
      },
    ],
    photos: [
      {
        backgroundColor: { red: 204, green: 214, blue: 221 },
        cropCandidates: [
          { x: 0, y: 0, w: 2048, h: 1147 },
          { x: 0, y: 0, w: 1536, h: 1536 },
          { x: 0, y: 0, w: 1347, h: 1536 },
          { x: 0, y: 0, w: 768, h: 1536 },
          { x: 0, y: 0, w: 2048, h: 1536 },
        ],
        expandedUrl: 'https://twitter.com/mayurbhoii/status/1675039428610502656/photo/1',
        url: 'https://pbs.twimg.com/media/Fz7vefraAAM96eZ.jpg',
        width: 2048,
        height: 1536,
      },
    ],
    conversation_count: 0,
    news_action_type: 'conversation',
    isEdited: false,
    isStaleEdit: false,
  },
}

const Data = RawData.data

export default Data
