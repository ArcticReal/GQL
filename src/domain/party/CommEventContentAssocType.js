
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommContentAssocTypeType} from '../party/CommContentAssocTypeType.js';
import {ContentType} from '../content/ContentType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';


const CommEventContentAssocType = new GraphQLObjectType({
  name: 'CommEventContentAssocType',
  description: 'Type for CommEventContentAssoc in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (commEventContentAssoc, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${commEventContentAssoc.contentId}`)
    },
    commContentAssocType: {
      type: CommContentAssocTypeType,
      args : {commContentAssocTypeId: {type: GraphQLString}},
      resolve: (commEventContentAssoc, args, {loaders}) => loaders.ofbiz.load(`commContentAssocTypes/find?commContentAssocTypeId=${commEventContentAssoc.commContentAssocTypeId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (commEventContentAssoc, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${commEventContentAssoc.communicationEventId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {CommEventContentAssocType};
    