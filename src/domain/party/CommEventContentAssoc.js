
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

import {CommContentAssocTypeType} from '../party/CommContentAssocType.js';
import {ContentType} from '../content/Content.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';


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
    




const CommEventContentAssocInputType = new GraphQLInputObjectType({
  name: 'CommEventContentAssocInputType',
  description: 'input type for CommEventContentAssoc in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    contentId: {type: GraphQLString},
    commContentAssocTypeId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CommEventContentAssocInputType};
    