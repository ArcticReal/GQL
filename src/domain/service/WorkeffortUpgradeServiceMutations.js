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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const migrateWorkEffortContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz migrateWorkEffortContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortUpgrade/migrateWorkEffortContactMech?`, null, req);
  }
};
export {migrateWorkEffortContactMech};
