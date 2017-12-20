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
import {CommEventContentAssocInputType} from '../../party/CommEventContentAssoc/CommEventContentAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommEventContentAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCommEventContentAssoc method',
  args:{commEventContentAssocToBeAdded: {type: CommEventContentAssocInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/commEventContentAssocs/add?`, args.commEventContentAssocToBeAdded, req);
  }
};
export {createCommEventContentAssoc};


const deleteCommEventContentAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCommEventContentAssocByIdUpdated method',
  args:{commEventContentAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/commEventContentAssocs/${args.commEventContentAssocId}?`, null, req);
  }
};
export {deleteCommEventContentAssocByIdUpdated};


const updateCommEventContentAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCommEventContentAssoc method',
  args:{commEventContentAssocToBeUpdated: {type: CommEventContentAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/commEventContentAssocs/${args.nullVal}?`, args.commEventContentAssocToBeUpdated, req);
  }
};
export {updateCommEventContentAssoc};
