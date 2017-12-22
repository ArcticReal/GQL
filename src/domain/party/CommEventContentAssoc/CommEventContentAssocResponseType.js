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

const CommEventContentAssocResponseType = new GraphQLObjectType({
  name: 'CommEventContentAssocResponseType',
  description: 'response type for CommEventContentAssoc',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {CommEventContentAssocResponseType};
    