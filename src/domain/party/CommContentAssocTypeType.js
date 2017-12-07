
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommEventContentAssocType} from '../party/CommEventContentAssocType.js';


const CommContentAssocTypeType = new GraphQLObjectType({
  name: 'CommContentAssocTypeType',
  description: 'Type for CommContentAssocType in party',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    commEventContentAssoc: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {commContentAssocTypeId: {type: GraphQLString}},
      resolve: (commContentAssocType, args, {loaders}) => loaders.ofbizArray.load(`commEventContentAssocs/find?commContentAssocTypeId=${commContentAssocType.commContentAssocTypeId}`)
    }
  })
});

export {CommContentAssocTypeType};
    