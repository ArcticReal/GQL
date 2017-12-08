
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

import {GlAccountCategoryType} from '../accounting/GlAccountCategory.js';


const GlAccountCategoryTypeType = new GraphQLObjectType({
  name: 'GlAccountCategoryTypeType',
  description: 'Type for GlAccountCategoryType in accounting',

  fields: () => ({
    glAccountCategoryTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountCategories: {
      type: new GraphQLList(GlAccountCategoryType),
      args : {glAccountCategoryTypeId: {type: GraphQLString}},
      resolve: (glAccountCategoryType, args, {loaders}) => loaders.ofbizArray.load(`glAccountCategorys/find?glAccountCategoryTypeId=${glAccountCategoryType.glAccountCategoryTypeId}`)
    }
  })
});

export {GlAccountCategoryTypeType};
    




const GlAccountCategoryTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryTypeInputType',
  description: 'input type for GlAccountCategoryType in accounting',

  fields: () => ({
    glAccountCategoryTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GlAccountCategoryTypeInputType};
    