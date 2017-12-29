
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommContentAssocTypeType} from '../../party/CommContentAssocType/CommContentAssocTypeType.js';
import {ContentType} from '../../content/Content/ContentType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';


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
      resolve: (commEventContentAssoc, args, {loaders}) => loaders.ofbiz.load(`party/commContentAssocTypes/find?commContentAssocTypeId=${commEventContentAssoc.commContentAssocTypeId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (commEventContentAssoc, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${commEventContentAssoc.communicationEventId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {CommEventContentAssocType};
    