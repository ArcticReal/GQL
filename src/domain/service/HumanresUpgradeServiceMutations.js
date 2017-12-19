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


const migrateSalaryStep = {
  type: GraphQLString,
  description: 'mutation for ofbiz migrateSalaryStep method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/humanresUpgrade/migrateSalaryStep?`, null, req);
  }
};
export {migrateSalaryStep};
