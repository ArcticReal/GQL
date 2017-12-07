
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountCategoryType} from '../accounting/GlAccountCategoryType.js';


const GlAccountCategoryTypeType = new GraphQLObjectType({
  name: 'GlAccountCategoryTypeType',
  description: 'Type for GlAccountCategoryType in accounting',

  fields: () => ({
    glAccountCategoryTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountCategory: {
      type: new GraphQLList(GlAccountCategoryType),
      args : {glAccountCategoryTypeId: {type: GraphQLString}},
      resolve: (glAccountCategoryType, args, {loaders}) => loaders.ofbizArray.load(`glAccountCategorys/find?glAccountCategoryTypeId=${glAccountCategoryType.glAccountCategoryTypeId}`)
    }
  })
});

export {GlAccountCategoryTypeType};
    