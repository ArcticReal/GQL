
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

import {CommEventContentAssocType} from '../party/CommEventContentAssoc.js';


const CommContentAssocTypeType = new GraphQLObjectType({
  name: 'CommContentAssocTypeType',
  description: 'Type for CommContentAssocType in party',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    commEventContentAssocs: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {},
      resolve: (commContentAssocType, args, {loaders}) => loaders.ofbizArray.load(`party/commEventContentAssocs/find?commContentAssocTypeId=${commContentAssocType.commContentAssocTypeId}`)
    }
  })
});

export {CommContentAssocTypeType};
    




const CommContentAssocTypeInputType = new GraphQLInputObjectType({
  name: 'CommContentAssocTypeInputType',
  description: 'input type for CommContentAssocType',

  fields: () => ({
    commContentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CommContentAssocTypeInputType};
    