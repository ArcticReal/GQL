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

const CommEventContentAssocInputType = new GraphQLInputObjectType({
  name: 'CommEventContentAssocInputType',
  description: 'input type for CommEventContentAssoc',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {CommEventContentAssocInputType};
    