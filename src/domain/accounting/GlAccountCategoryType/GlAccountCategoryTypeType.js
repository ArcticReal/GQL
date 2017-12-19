
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

import {GlAccountCategoryType} from '../../accounting/GlAccountCategory/GlAccountCategoryType.js';


const GlAccountCategoryTypeType = new GraphQLObjectType({
  name: 'GlAccountCategoryTypeType',
  description: 'Type for GlAccountCategoryType in accounting',

  fields: () => ({
    glAccountCategoryTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountCategories: {
      type: new GraphQLList(GlAccountCategoryType),
      args : {},
      resolve: (glAccountCategoryType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountCategorys/find?glAccountCategoryTypeId=${glAccountCategoryType.glAccountCategoryTypeId}`)
    }
  })
});

export {GlAccountCategoryTypeType};
    